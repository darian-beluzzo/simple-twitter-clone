
# Rodar este comando quando der o erro abaixo no Android do Genymotion:
"Unable to load script from assets 'index.android.bundle'. Make sure your bundle is packaged correctly or you're running a packager server."
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res