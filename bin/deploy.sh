export NODE_ENV=production
cd themes/sallai
yarn
cd ../..
yarn generate
rm -rf themes/sallai/node_modules
