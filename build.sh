function pcho(){
  echo ""
  echo "<<< $@ >>>"
}

pcho "Compiling" &&
yarn build &&

pcho "Save changes" &&
git add -u &&
(git commit -m "Automatic commit" || true) &&

pcho "Checkout deploy" &&
git checkout dist &&

pcho "Remove old files" &&
rm -rf assets &&

pcho "Update files" &&
mv -r dist/* . &&

pcho "Commit and Deploy" &&
git add . &&
git commit -m "feat: deploy ${date}" &&
echo rowend| git push &&

pcho "Return to previous branch" &&
git checkout main

