module.exports = {
	testEnvironment: "jsdom",
	setupFiles: ["dotenv/config"],
	setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": [
			"@swc/jest",
			{
				sourceMaps: true,
				jsc: {
					parser: {
						syntax: "typescript",
						tsx: true,
					},
					transform: {
						react: {
							runtime: "automatic",
						},
					},
				},
			},
		],
	},
	moduleNameMapper: {
		"^@/(.+)": "<rootDir>/src/$1",
		"axios": "axios/dist/node/axios.cjs",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"jest-transform-stub",
	},
	"collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/**/*.stories.{js,jsx,ts,tsx}",
      "!src/test/**/*.{js,jsx,ts,tsx}"
    ]
};
