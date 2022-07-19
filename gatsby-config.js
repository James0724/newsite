require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto Mono\:200,300,500`,
					`JetBrains Mono\:300,500,700,900`,
					`Montserrat Alternates\:300,500,700,900`,
					`Hahmlet\:300,500,700,900`,
				],
				display: "swap",
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/svg/logo.svg",
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /svg/,
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { name: `images`, path: `${__dirname}/src/images` },
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `he4kfh34v1rf`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
