module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    babel: {
        plugins: [
            ["import", {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css"
            }]
        ]
    }
};