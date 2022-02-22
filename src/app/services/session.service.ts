import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { map } from 'rxjs';

const COLLECTION = 'stars';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private uniqueId: string | undefined;

  constructor(private readonly store: AngularFirestore) {
    const fpPromise = FingerprintJS.load();

    (async () => {
      const fp = await fpPromise;
      const result = await fp.get();
      this.uniqueId = result.visitorId;
    })();
  }

  getStars() {
    return this.store.collection(COLLECTION).valueChanges();
  }

  addStar() {
    return this.store.collection(COLLECTION).add({ id: this.uniqueId, starred: true });
  }

  removeStar() {
    return this.store
      .collection(COLLECTION, (ref) => ref.where('id', '==', this.getUniqueId()))
      .get()
      .pipe(
        map((querySnapshot) => {
          this.store.collection(COLLECTION).doc(querySnapshot.docs[0].id).delete();
        })
      );
  }

  getUniqueId() {
    return this.uniqueId;
  }
}
