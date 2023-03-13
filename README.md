# [MultiversX (Elrond) - My NFTs Collection dApp]

![My Nfts from colection thumb](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/nfts-collection-dapp-thumbnail.jpg)

MultiversX (Elrond) is the best blockchain technology in terms of speed, transaction costs, and real word utility.
We, believe in Elrond's power and we chose this network in our Web 3 Journey. We want to bring our experience to the table and expand the network's ecosystem by creating a suite of dApps for web developers to make the transition between the two Web versions easier.

Creative Tim's first dApp on MultiversX (Elrond) is already here. It is a starter template for NFTs collection creators and is open source so that all the community can use it.

Our dApp features:

* Showcases all the NFTs that you own from a specific collection with details - each NFT's rarities and attributes;
* Login process using the cryptocurrency wallet;
* Innovative and Sleek Design inspired by Soft UI- for an intuitive user experience.


Special thanks:
During the development of our dApp, we have used the dApp code from [MultiversX (Elrond) Network](https://elrond.com/); this way, we thank the MultiversX (Elrond) team for providing it.



## Table Of Content
* [Versions](#versions)
* [Screen Shots From dApp](#screen-shots-from-dapp)
* [Wallet Devnet Credentials for Testing](#wallet-devnet-credentials-for-testing)
* [Get Started](#get-started)
* [Before Run dApp](#before-run-dapp)
* [dApp Dependencies](#dapp-dependencies)
* [Install and Run dApp](#install-and-run-dapp)
* [Build dApp](#build-dapp)
* [File Structure](#file-structure)
* [Contributing](#contributing)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)
* [Resources](#resources)
* [Social Media](#social-media)

## Screen Shots From dApp

| Landing Page | Dashboard Page |
| --- | --- |
| ![Landing Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/landing-page.jpg) | ![Dashboard Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/dashboard-page.jpg) | 

## Wallet Devnet Credentials for Testing
For viewing the NFTs in the dApp live preview you can connect with the credentials below:
1. [download devnet wallet](https://www.dropbox.com/s/0tlbea4nb9ouhgz/erd13m9ewd8p2qledk6v6ax9mzpgzjmdsmqqws6s4uwy35fqpz53dtdq82j56j.json?dl=0) 
2. use password: **DevnetCreative10$**

## Get Started
You can choose from these options to get code locally:
- [Fork from Github](https://github.com/webcat12345/multiversx-my-nfts-collection-dapp/fork)
- [Download zip](https://github.com/webcat12345/multiversx-my-nfts-collection-dapp/archive/refs/heads/main.zip)
- [Clone](https://github.com/webcat12345/multiversx-my-nfts-collection-dapp.git)

## Before Run dApp
- Create a devnet wallet (you can use only mainnet) - https://devnet-wallet.elrond.com/
- You need to update the config file (find in `/src/config`)
  - Change the collectionTicker
  - Change the dAppName

## dApp Dependencies
To avoid issues and have better performances use at least: 
- node version: `14.x.x`

## Install and Run dApp
```
$ npm install (with node v16.x.x you need to use npm install --legacy-peer-deps command)
$ npm run dev # start devnet 
OR
$ npm run main # start mainnet
```
## Build dApp 
```
$ npm run build-devnet # build devnet
OR
$ npm run build-mainnet # build mainnet
```

## File Structure
```
multiversx-my-nfts-collection-dapp

├── README.md
├── LICENSE.md
├── package.json
├── public
└── src
    ├── App.js
    ├── assets
    │   ├── custom.scss
    │   └── img
    ├── components
    │   ├── Header
    │   ├── Layout
    │   │   ├── Footer
    │   │   ├── Navbar
    │   │   │   ├── index.js
    │   │   │   ├── navbarConnect.js
    │   │   │   ├── navbarItems.js
    │   │   │   └── navbarSimple.js
    │   │   └── index.js
    │   ├── LoginModal
    │   │   ├── index.js
    │   │   └── loginModalContext.js
    │   └── NoNFT
    ├── config
    │   ├── devnet.config.js
    │   └── mainnet.config.js
    ├── index.js
    ├── pages
    │   ├── Dashboard
    │   │   ├── index.js
    │   │   └── myCollection.js
    │   ├── PageNotFound
    │   │   └── index.js
    │   └── presentation.js
    └── routes.js
```

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

One can contribute by creating pull requests, or by opening issues for discovered bugs or desired features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Reporting Issues
We use GitHub Issues as the official bug tracker for this dApp. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the dApp. 
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.










