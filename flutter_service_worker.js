'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "25642d35c017de8c0b5d06516266a135",
"index.html": "330b28051e8dc4d01fce3223e9a21227",
"/": "330b28051e8dc4d01fce3223e9a21227",
"CNAME": "e40da3812e7d91045e1339d5638e7740",
"main.dart.js": "11d26579f94c30d821e8ea432f6aa8e6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "ab48845713c1340efdc2b0145be4dc8c",
"icons/Icon-192.png": "0f6821d7f5539b5b37aefb6c53fabf00",
"icons/Icon-512.png": "086d705ff9ab19ae7a8c27bb5cfa2505",
"manifest.json": "1765b53cc1500b6d5bbac2878b046a39",
".git/ORIG_HEAD": "a582d5d24a8fed8f527a45067ce7fc34",
".git/config": "519bb8c7826b4abc456849f1d872d271",
".git/objects/0d/15c0d2758fcf2935b07aa687cea1e54dad3c5d": "3cb979eae7873762c96e77b3e8ca34c0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/51a4f4ee12a90cf2d7254eb21aaf66a3f58321": "82e781489d1982a39bb27c4a6209b280",
".git/objects/3e/a2f4a6c188a89d1aae6788f4860c0035a2dac1": "f66a7bf8c4e3599ab23ec63b697d79fd",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/6bfe21a110ee30f09efe6b62db5415f0452e0d": "5d54a52ab52c583783a00f3574a58e04",
".git/objects/6f/3f742548d7e5203fec852f082b79cbe2180676": "267bf7c90faff229028e4dcdb6f1a760",
".git/objects/03/ec79709882ee76b5ba99d828ee6847465ece81": "8ee365f72c5e6b63cca776c0146e7bba",
".git/objects/9b/2fb5f072366106a92074c650c55f611a66e637": "761c8dd5cd18da7c43ed5f7e5a010e0c",
".git/objects/9e/488d0bee362cbd4f654b836a836e68f29e4692": "e2008bb6689e989833c9a7747f802a42",
".git/objects/35/94f2277e9792c6daf17f92aa525dbff52c529c": "c7abda72236066f523c417f473cac7a5",
".git/objects/56/f58c69f081c32f061c8d0b9f1dcc4aa1f3240c": "443c63be9a8e4d5de2681358cbb7c8df",
".git/objects/3d/c778ffd0e8e8a97bf15f6213fb59ef032d817c": "3b1c52c7a982f021f955809958208507",
".git/objects/58/9926bb7952fa9af1773087342b70d1e6ec2a7e": "9b7e16c33cbb96962f66957f3e70016a",
".git/objects/67/d4ba1fc7cb36ad7e1d3e123bc20e67779ac1e2": "0696854eecabdcd20e907fbdd8da2a23",
".git/objects/94/cd83fca48114d2e2598b27323e777358594732": "84be6c23e518e1262a1501674ec00183",
".git/objects/0e/80387cadc839231bd4dbcffd2651e5ae7a9c6e": "9555d65913f87665cc0dd72e7299bfe0",
".git/objects/0e/4a116d3fc8db81444ca98e7a02124c4bd0b242": "80830163bd57606990e634fb68b4e98f",
".git/objects/5a/f308d3f98c4a89361d7bc86f5f6672a47149ec": "054263ea8678747aaf9fbf57b16aafde",
".git/objects/5a/cb1b4354fb7420994c3663043f62466c46f69c": "c7f397f0cbeb8fa77ac2afd6b3a2b259",
".git/objects/9c/13efc9a920e8d4f144db5ff3faabeb8fecea15": "7c9841951ff8bb95053d39744d7667be",
".git/objects/02/a65132c4b97f75f5335c83d6cece067d8c144a": "350f4d1e85fe1ac0f29939b813d20b9a",
".git/objects/a3/b7c608dd7b18347461c4988ab1d6e860a94c82": "3880fc3b854e5966bf0cbefa4ae78586",
".git/objects/b5/2bbba17bee5d8ba5b09ab5a266c1976aac3321": "1a859ef64876f26873f08c692baaada2",
".git/objects/bb/479d26a67e5fd549a9c6d4ce152a359e462dc0": "50f49a589c7152d6dbefc4f28bc0da55",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/df/20712d15cad88e0dd7bcf35d02b812a0b0b3c8": "997097d8aba988d0c95e9073e113ae91",
".git/objects/a2/f782d8b2ee9adb7c2257bca15a4209a81418d8": "5aaa9b9000e26d7063e9d848d649fa08",
".git/objects/d1/a44e81d7bde8ea4467cea5f4099e477b1e3e41": "08eae294703bf4f3a4257f5e1c2077fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/5d68f4b823a225ea757bbad2de280861dd91af": "bc29b269b1705ef6e99ac65d3c6854a5",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/eed56d2bb8e4ae90858c2a43b839ed926ad009": "715de795356bf90f8a2ced529bd941a5",
".git/objects/c7/a527f0ac8a6d2a9ae93a9492722846a5de9e64": "e32c0b6dea39cd04ddb94f81bd78b8b9",
".git/objects/c7/8f6c4694c809002b3e10e8ac28709ea62de3bd": "aa6b0a0b1e94278a711d31afd939eac8",
".git/objects/ee/5928b6553971543e4f86a3f38d7563a716d3ca": "f8daaf478837327ebea85ec759912a6f",
".git/objects/fc/d42b4d4b855e2f80e84614823d3d4c25428922": "8f1f5b5fc8bd35b70bddaf635e0283ee",
".git/objects/fd/066abd176e614dabac9f0d7f8dc256ae9767dc": "70fb81c527a83983670327c7f66bbe4d",
".git/objects/f5/d63cc7448ed0e895e1567f7b6782701eab8d1a": "4f5d60aaf99bb72cf04d0b486e783218",
".git/objects/ca/08b5d5ba8982d8f0c3bc0479b655b42edece43": "d472d47ff67c24279bc10e7f535181f2",
".git/objects/fb/2a8f6272c883c0f63017c0f3eb98828024a109": "dc1c62c02290131aae08789b9deb0af6",
".git/objects/fb/068b8fba293c98f3aa1ecb2c49179f665fc2c4": "4e05d442c53a0f0d18bba440985dcb93",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/db40a3c8bc6d2ffb0a03053118b3d8a8bab5d2": "70eae47153a09490655db1f7f08861c9",
".git/objects/20/8112f8b4dcf2cb2c74cc3d1a00dff3fe51828d": "f72d3d64858003e71c47ffe366ec4cb1",
".git/objects/18/3863f17f5435eb517200fd80149b4da851f0be": "75237246581afa284394b29ee31bedfe",
".git/objects/18/8af0d6e16d4a414362ec2927bcaf842d78e06d": "5245682971b3423835c7ba3d39af79f7",
".git/objects/4b/96508b37813e735e0fb825fa04064095d032d5": "fa1701d98fcc9faf87ce25ea5d391f17",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/c0c34b22d7340b91221260978bcf48f5ac656b": "8eac5765103e164c9c96171812e3e3ff",
".git/objects/73/daa6f8b7f672074462d5fd04ed47f9398e2ade": "d66ee78e903de5e8c851709db2358637",
".git/objects/7b/bed1f446b6b35b2884ed4ff9e8ba87b0a4e3b3": "052e9d1391ac37effc01d67b768738fb",
".git/objects/8f/daa8459986f51f071a8e2764a451f050c1c363": "40bb0e179c5fa3e3cb1878e762739826",
".git/objects/8f/7c3b3c16c36bd448309f09f7ef4342c5394717": "9894372a5ee6deff04275db7fdacba09",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/04c157146f8f33a0ac745e8c94a7778fefeb80": "21e6e83f5b75ccc18db2fc38d726c1f9",
".git/objects/4c/a88596df2d54993d6c8d4423952707006b4354": "de6e13c473ab59b52278d3db2c243014",
".git/objects/72/5d7cca19bb6c02cd17fca6b595f121d92b4708": "6de97ddcfbfb6995f81ef79479430da4",
".git/objects/2f/c9ac94d1cbca4311e1ed7bcb96f8481cc55f65": "eb8b15f0a53c5fe5d699d6a4f07927a4",
".git/objects/2f/c94768d240d64beb7d784bcaae1f7f4f1cfda6": "ef222ad3e66ed4facb262f7119eb54de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7a3cc7172a1d95debfdff0b169aa379c9045ff": "22d5536ee2014444395133b2b450e987",
".git/objects/00/67dc03820f795305375ccd7335befcb2ed5c6c": "23cbc7ab1279d8fd286fdd9d84ce952d",
".git/objects/9a/232b177f8aef8512ef0de425bd2ddb946ee06e": "92949fe9b6933ef337c9a90b1d7ff1e8",
".git/objects/5d/6880cd2bf19a078fbf542bbd1edc488819528e": "772ca62d905195cc07a04b69eef4642b",
".git/objects/31/84906f6c45d960fe8f36666ea2a6744f20a8af": "ea95b4516d6dd58f46c96d5c956f9668",
".git/objects/91/b624f9f96ab921312ea6a3101149604f115dd8": "5a5466c66ee62aa0e67a04fe312030d1",
".git/objects/96/3aff00f42611d800247437326a5b38aa2c45f6": "6d5e8b298251ef53ac9b36fef02da979",
".git/objects/96/f142318a087187a0ed0be71bddfeafda95be78": "bc970536024f7ae08216ddd750fcb969",
".git/objects/54/81b014aafb7ab658b3856eda2bfc519259957e": "096a7f8b131de28140f53b6d7a4738e0",
".git/objects/5e/18d087578d596eb55a4469442ba89c8def681c": "ea4c1fd79907c78b8c8f42dd8f3118d2",
".git/objects/5b/961a9719e68fac0e92d8faaffde6094f02ad2c": "4f8f1d56b85c20615778fd4ef9dc4b4f",
".git/objects/6d/ab48456e6396eb6cee36399a2ac9edc41e280e": "1c5c3d534c7387fd1e14e340ccf084c3",
".git/objects/6d/1d92301929d40a506fae2650bcfd42b1ebad5d": "32b76c0b60e641bcf6ae34470b161572",
".git/objects/01/95b96013e55ac34cddfb550c04fe3ad7cb7d1d": "05f02de5a65c00445f6c9fa242a67367",
".git/objects/06/c2be5a859fda45fcbe221797b3e0629b612cb5": "1dbc9fb36469b004c203c9eb88848303",
".git/objects/6c/17e439f0fa641a88c8c3d8f712dcfedf5470f0": "abde739b55eeab3f7e0215039ca5594b",
".git/objects/97/f75c146d5ff42c6089d58a13c676a5cd02d9ba": "7b827226ee2a01116045cfb9e166a038",
".git/objects/64/23268a36408b753ff0a0100d3d88f0127a8ea1": "328eb1b397138c3825a26bf4e76cbc60",
".git/objects/64/2d375ab85b23b571df5b897cc8f2ea4608f7c4": "4a7251ae0a92adb28a9221f096777e41",
".git/objects/64/e05a5363a7bb4674d3678ebaf05e45f16a7ab2": "95a7a7836812e43bd7af2b348d8cce0a",
".git/objects/90/0eb7b045a87d0b3890340ef7c1f60ff2bf4885": "129f7da86bf6283827ea298b0603ff0f",
".git/objects/bf/1ec1b43dcb233a539a6f00e846553cdf8f817c": "56e580791c12cce2df9747f2ff5843d1",
".git/objects/bf/c5e6305ca822254db0a0a675083496c0da1797": "6481c0f4a9814543cfe611803bec545b",
".git/objects/d3/6c1d191886ce8c09fee893236ad80dfeb3d7c9": "e9d5fec44a37d1a4ccfc7325061063f0",
".git/objects/a7/6f7ec36ddeb4e2b32ef9264cb86190a25f112c": "b26a86b764c8693882fd3ccd229770f9",
".git/objects/a7/71d0147e8f4d6d14e612935192dd4e9f70337e": "2eb1b0bcf2b101329d3a0b18a5c7b875",
".git/objects/a7/68a66209d76c693175cca749042573c44038be": "1d4cf9843c32afb1c245f0f98a48574d",
".git/objects/d5/f7e7373fb2cfe49f8a694855a092d502de2586": "df69a3ca51c3f1fb241de5aa50e284ba",
".git/objects/d2/d3acebbe955b85f42a0a9861d32d53be3a88b2": "f4bcf78e5854f902226df4ef55d90cb1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/cc/83be547dda8b0d507cf8eb5fa36ed6e39bc29f": "b5b43f60b839ee8da6c9582a4f22900d",
".git/objects/cc/cb8c6a6adf0c609593a5b18e9d9597590efe13": "d6155ec49f711954ac95234c11b218f9",
".git/objects/f7/2b20141f72f8a5388aa848729cbe3f7854f7b6": "e23e0e13ac43999a1dd81f3ab13aa1eb",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/c2/daacaaf6388e1de37164d7d5c7df39b8d88644": "830e1a6c8172c65ca0ed1fc1f717d668",
".git/objects/c2/f9f611a7b6beafa9b88662bb4ab2b39fd5b014": "59ce373a7cc0f618cb45ddd05d0a0558",
".git/objects/c2/cc6c89aae945fa44a7135403653f9404ade821": "56ba09070a8119d0731c9ca1bed071b7",
".git/objects/f6/7ee2d93e3f90e9f1ecbe5e86025978c6369eb5": "4089e8457b597900e5fb0fd1c170e128",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/ad002d9814bece1935a326fc203cf311bc308c": "c63ec2c68b4786ea991f204534cf2771",
".git/objects/cb/964dcfee691a9ad7dae6eb5412abb99d00f353": "8b326708a207e8fb6031bf1808bd4b9a",
".git/objects/79/993f52497c6a5920d16a5ae23023196ae5a9b3": "0e1b3870c29f92af797de84dfdfb74c1",
".git/objects/79/eb7f98e775d953c2770b27da8fc6db29479f6d": "b168a2cbb34e43bf96a2e53a21b81daa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/3dd4bfe73be354dd325913a6d4a83c070b029d": "b6935df7e40a8a79de2f1d5117ac6456",
".git/objects/83/66ceced6fd9d00031c601885bb560b7b7a66a7": "aa411f4c0f865ab05eb70e351727dc34",
".git/objects/1b/ed46f6109908149dd957b8e97f100972e53efe": "2628f22a6c7521d7a7be0105361dee96",
".git/objects/48/019483b47a4c5be40ebd76d0a03ad94593c37a": "b17bab6fc14d8a2dc748b6d223492483",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/95a3fdee6aba1ea09195f4b1b8aa0ca80f4852": "6b562e0d135c4136c6acf9cf8b4d4aa3",
".git/objects/1e/48ccef1ae97974f022a07aa52f2c04d0524815": "68450fcf07340b222875eea0e0acfb66",
".git/objects/4a/472beef161bbf00c133fdc4bb8e8451942f6f1": "97a4349ad9d3c5edba1629ad24fb3096",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/c3ee4fd01250fd1af905ac50af388f9bc8c59d": "7eccd31f9a02b3e8544150333f776de3",
".git/objects/23/17ef12bcfbe56a36087b5be20c3e24633c8fde": "e898ab31bfb375343efb5b24945163b1",
".git/objects/15/600df759ddd0831faee7a7e03f9e4088e69d85": "160533ffa09c6977f625f8585265bf55",
".git/objects/12/2c1de8b015a090f97344e3d040c69665ab8245": "af8ab2d692f582dc297ffe6bb7f46a6f",
".git/objects/8c/af323b9e4668fbf90548b3bf53c31b077eb175": "1e949976e7a196501d49df507a0949b0",
".git/objects/85/a3901445c2bc2c14bb68e440b2ef9a9280f160": "5fdaaeb695f3becbec9c093d7d5cf373",
".git/objects/71/1b1ede09970eb2e3758c830e62e3a17b880f00": "eb2c69697997c61fb7eaa5d2aff675c3",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/fda622fe2b49e195ea174a2d3aaa65a81a377b": "44e0e7d450e4ebf245cea2c75d6e3ef4",
".git/objects/40/e8c9f6ccf5048ae73c300c9680b14cdbb40aa8": "e70735fea2d5e0115306523d32d12ad1",
".git/objects/47/4d74dc920ac16153e4744f56b7bf239f9f2166": "dda39a9576bf5d0048ce33386459fae4",
".git/objects/47/7fc658a3e2e54478e46c6ac210eb23d0118bca": "456caf3fade7d83551639855d52bd5a7",
".git/objects/7f/43d5ac81ae9dfecd1c777d908d35b787700ac6": "fd9db42622195e57121d586291d5241c",
".git/objects/7f/2c143a5853eac009ba77c820005c22a4f26514": "c11ab882ea00e94883880b7b9b14cd08",
".git/objects/7a/7d9c1aa6c8331cb50fe5ab4f1de18bd7c5b1e4": "bd11fda73af86da3f1a1e35d1203c79b",
".git/objects/7a/b4d15c9c7a19e6618dbc9878eb701f3fc9cb71": "0a161397323c77c9c116ecd2e3ec3ec9",
".git/objects/14/6e1810ea1f6f4b1b7810a46c7e49f7739de44f": "83827676ad5b655fc5998c13a9eade5d",
".git/objects/14/12b769831c8d91e92d65e06909381620ffd6ae": "a869e80580480331f0f214a46ee0756c",
".git/objects/14/fa8057a7a2eb640133b59f6c9f92aca26a77fa": "b78050507ec6a4a4fede0a72a7aed033",
".git/objects/25/c5f94395a907c3475deb584369efa7125c9c11": "5744bf57907ca9767104ed58f15ff159",
".git/objects/25/71550a9febc79822e8dc486cf619a83ff38514": "854f64706189a6500d7e72fc535b24d1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1735a5d7497ce79b7fe3ae0b2e06e68",
".git/logs/refs/heads/master": "f1735a5d7497ce79b7fe3ae0b2e06e68",
".git/logs/refs/remotes/origin/master": "62c60596df2794f0327f699f25c9f1e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a3ed8af2003589522e823b29a5321d20",
".git/refs/remotes/origin/master": "a3ed8af2003589522e823b29a5321d20",
".git/index": "91b5ba4ea22ebbe55ca19992f111e2f0",
".git/COMMIT_EDITMSG": "377ad60d660aa7d316534a8bd57399ee",
".git/FETCH_HEAD": "2398c94ca9c2074c3ccff78f912d76a6",
"assets/images/busan.jpeg": "8c2e8e14ecbdc327347bbbbe58ef3961",
"assets/images/grocery_bag.jpeg": "f90201dc0c843890e7270713d37f2c1c",
"assets/images/business.jpeg": "65463ef0ceb927a5ef93e69d3cb6129f",
"assets/images/world.jpeg": "38746410cef114d4928eb33d520a8c0d",
"assets/images/fluting_paper.jpeg": "b513a4143382dbff67da2594c3816e8c",
"assets/images/papersack.jpeg": "a07fedda297db693948ce7c5920d6116",
"assets/images/fluting_paper.jpg": "b513a4143382dbff67da2594c3816e8c",
"assets/images/painting.jpeg": "eefe96567b36984e2b5ad9fa58e75a5b",
"assets/images/logo.svg": "a9ad6c763839e9fc3b1652604a64e25c",
"assets/AssetManifest.json": "07789e875c5d60a73e9211c4e6e06743",
"assets/NOTICES": "0d4cedffa03ebc04d089259641a93e79",
"assets/FontManifest.json": "b6500c6ae20e36691dbd112661f5e01e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
