# 🎟️ Cinema Ticket Booking App

Aplikasi pemesanan tiket bioskop menggunakan React Native + Expo.

## 🚀 Fitur Utama
- Autentikasi: Login & Register
- Home screen dengan daftar film dan banner promo
- Filter bioskop (XXI, CGV)
- Detail film
- Navigasi bawah (Bottom Tabs)

## 📦 Tech Stack
- Expo
- React Native
- React Navigation
- @expo/vector-icons
- AsyncStorage (untuk simpan data login)
- Local Assets untuk gambar

---

## ⚙️ Cara Instalasi

### 1. Clone Repo
```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```

### 2. Inisialisasi Proyek (jika belum)
```bash
npx create-expo-app . --template blank
```

### 3. Install Dependensi
```bash
yarn install
```

### 4. Install Tambahan Package
```bash
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/bottom-tabs
yarn add react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
yarn add @expo/vector-icons
yarn add @react-native-async-storage/async-storage
```

### 5. Jalankan Proyek
```bash
yarn start
```

Lalu pilih Android/iOS/Web sesuai kebutuhan.

---

## 📁 Struktur Folder
```
├── assets/
│   └── images/
├── components/
├── navigation/
├── screens/
├── App.js
├── README.md
```

---

## 📝 Catatan
- Simpan gambar di folder `assets/images/`
- Semua ikon diambil dari `@expo/vector-icons`
- Navigasi diatur menggunakan `@react-navigation/native-stack` dan `bottom-tabs`
