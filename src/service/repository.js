import { child, get, ref, remove, set, update } from 'firebase/database';
import { db } from '../firebase';

class Repository {
  createProduct(productId, productInfo) {
    set(ref(db, 'products/' + productId), {
      productInfo,
    })
      .then(() => {
        console.log('successful create!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  readProductList() {
    const dbRef = ref(db);
    get(child(dbRef, 'products'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log('No product list data');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  readProduct(productId) {
    const dbRef = ref(db);
    get(child(dbRef, 'products/' + productId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return snapshot.val();
        } else {
          console.log('No product data');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProduct(productId) {
    remove(ref(db, 'products/' + productId));
  }

  updateProduct(productId, prodcutInfo) {
    update(ref(db, 'products/' + productId), prodcutInfo);
  }
}

export default Repository;
