
cd ./portfolio
npm run build
cd ..
cp -r ./portfolio/build/* .
git add .
git commit -m "create docs and ready for deploy"
git push origin master
echo ">> frontend deployed successfully"
echo "|| client-> https://amazingshellyyy.com/"