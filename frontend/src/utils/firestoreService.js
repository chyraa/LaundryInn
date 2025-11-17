// src/utils/firestoreService.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// Simpan pesanan baru
export const saveOrder = async (orderData) => {
  try {
    await addDoc(collection(db, "orders"), {
      ...orderData,
      createdAt: serverTimestamp(),
    });
    console.log("Pesanan berhasil disimpan!");
    return true;
  } catch (error) {
    console.error("Gagal menyimpan pesanan: ", error);
    return false;
  }
};
