import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1551730080-e956930acc41?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About Me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m wordoo
				</Text>
				<Text font="--base">
					Words matter. A lot. No more guesswork: see how people really feel about you.{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Text analysis for human behavior
					</Strong>
				</Text>
			</Box>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="700px"
				margin="0 auto 5px auto"
				text-align="center"
				width="700px"
			>
				Ready to launch ?
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="820px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				“Our product is designed to power real consumer centric strategies trasnforming any type of text into depth 
cosumer insights and shows how text analytics is more than just 'sentiment analysis'”
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1553532435-93d532a45f15?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Unstructured data
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Make sense of unstructured data
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Access text analytics capabilities regardless of your technical skills. 

Simple text analytics gives you insight into your customers' emotions and intent.{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							A single text message to the right person can make a difference.
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						AI-powered text analysis
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Find what needs your attention
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						When you combine human insights with AI-powered text analysis, 
you get a comprehensive view of customer conversations and the actionable content that needs your attention.{"\n"}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Get the message, not just the words
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Automate your workflows
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Design custom models
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Easily categorize your text to automate workflows, extract insights and improve search and discovery.{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Eliminates the complex and time consuming process of designing and training machine learning models
						</Strong>
						.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Data-driven insights
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Analyze text in seconds
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						We analyze the text that people write, and shows you the most popular words, 
topics, emotions and how they change over time.
You can then use it with{" "}
						<Strong>
							data-driven insights that lead to take impactful action{" "}
						</Strong>
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
					>
						keep in touch
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" max-width="400px">
						Discover the potential of text analysis, learn how it’s relevant & how it works.{"  "}
						<br />
						mail to --&gt;{"\n\n"}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							maiwordoo@gmail.com
						</Strong>
					</Text>
				</StackItem>
				<StackItem md-width="100%" />
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});