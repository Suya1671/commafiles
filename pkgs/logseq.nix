{
  zulu11,
  clojure,
  nodejs_20,
  babashka,
  src,
  version,
  pname,
  mkYarnPackage,
  mk-deps-cache,
  ...
}:
mkYarnPackage rec {
  inherit src version pname;

  packageJSON = "${src}/package.json";
  yarnLock = "${src}/yarn.lock";

  nativeBuildInputs = [
    zulu11
    clojure
    nodejs_20
    babashka
  ];

  buildInputs = [
    electron_31
  ];

  yarnOfflineCache = fetchYarnDeps {
    yarnLock = "${src}/yarn.lock";
  };

  staticCache = fetchYarnDeps {
    yarnLock = "${src}/static/yarn.lock";
  };

  clojureCache = mk-deps-cache {
    lockfile = 
  }

  installPhase = ''
    DESTDIR=$out PREFIX=$out make install
    install -Dm755 fennel-ls $out/bin/fennel-ls
  '';
}
