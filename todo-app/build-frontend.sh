# to run the script you need to have node installed (brew install node)

mkdir ./backend/src/main/resources/static

cd ./frontend || exit

npm install
npm run build
cd ..

cp -R ./frontend/build/* ./backend/src/main/resources/static