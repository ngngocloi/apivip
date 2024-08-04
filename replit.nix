{ pkgs }: {
	deps = [
		pkgs.nodejs-21_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}