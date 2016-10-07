1 - Why do we need package.json?

We have to list and specify all the dependencies/packages we use in our application. We can do that and also
specify a version range to any of our dependencies inside package.json. Then 'npm install' can read and install them automatically when we clone our repository to a new machine.


2 - What is the difference between 'npm install colors' and 'npm install colors --save'?

'npm install colors' --> it installs the latest version of colors npm dependency to your machine under node_modules folder

'npm install colors --save' --> it installs the latest version of colors npm dependency to your machine under node_modules folder AND it adds it to package.json


3 - Why do we want to ignore the node_modules folder with git?

Every node/npm package we download has many files, this create noise in our git history + snapshots when we
download or upgrade them. Since we have a place to list and specify our dependencies(package.json) we don't need node_modules in our git repository.


4 - What does the 'npm install' do?

It reads all the dependencies we have in the package.json, then tries to install them if they are not installed.


5 - Why do we have node_modules folder?

This is where packages/dependencies of our application are installed, so node.js can read them when we require them. This folder gets created automatically when you run 'npm install' or 'npm install package', if you don't have it already.
