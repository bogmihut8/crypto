import React from 'react';
import { Header, Segment, Icon, List } from 'semantic-ui-react'

export default class About extends React.Component {
	render() {
		return (
			<div>
				<div className="about-header">
                    <h1>About Cryptocurrencies</h1>
                </div>
				<div className="main-container about-container no-white">
					<Header as='h2' icon='question' content='What is Cryptocurrency?' />
					<Segment color='blue' className='what'>
						<div><b>Cryptocurrency&nbsp;</b>is a digital currency that uses encryption (cryptography) to generate money&nbsp;and to verify transactions. Transactions are added to a public ledger – also called a <a href="//cryptocurrencyfacts.com/what-is-a-blockchain/">Transaction Block Chain</a> – and new coins are created through a process known as mining.</div>
						<p>As of 2017, cryptocurrency has been used as a decentralized alternative to traditional fiat currencies (which are usually backed by some&nbsp;central government)&nbsp;such as&nbsp;the US dollar (USD).</p>
					<div>
						<p>For the&nbsp;average person using cryptocurrency is as easy as:</p>
						<List>
							<List.Item as='a'>
								<Icon name='right triangle' />
								<List.Content>
									<List.Header>Get <a href="//cryptocurrencyfacts.com/what-is-a-cryptocurrency-wallet/" rel="noopener noreferrer">a digital wallet to store the currency</a>.</List.Header>
								</List.Content>
							</List.Item>
							<List.Item as='a'>
								<Icon name='right triangle' />
								<List.Content>
									<List.Header>Use the wallet to create unique “public addresses”&nbsp;to receive&nbsp;currency.</List.Header>
								</List.Content>
							</List.Item>
							<List.Item as='a'>
								<Icon name='right triangle' />
								<List.Content>
									<List.Header>Transfer funds in or out of your&nbsp;wallet using public&nbsp;addresses.</List.Header>
								</List.Content>
							</List.Item>
						</List>
						<p><strong>What is a cryptocurrency address?</strong>: A public address is a unique string of characters&nbsp;used to receive cryptocurrency. Each public address has a matching private address that can be used to prove ownership of the&nbsp;public address. With&nbsp;Bitcoin the address&nbsp;is called a Bitcoin address. Think of it like a unique email address that people can send currency to as opposed to emails.</p>
					</div>
					</Segment>
					<Header as='h2' icon='history' content='The history of Cryptocurrency' />
					<Segment color='blue' className='history'>
						<List>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										The first decentralized digital cryptocurrency can be traced back to “<a href="//en.wikipedia.org/wiki/Nick_Szabo#Bit_gold" target="_blank" rel="noopener">bit gold</a>”&nbsp;(not to be confused with&nbsp;<a href="//en.wikipedia.org/wiki/BitGold" target="_blank" rel="noopener">Bitgold</a>), which was worked on by Nick Szabo between 1998 and 2005 but was never implemented.
									</List.Description>
      							</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										Although bit gold is considered the first precursor to bitcoin, cryptocurrency pioneer David Chaum’s company <a href="//en.wikipedia.org/wiki/DigiCash" target="_blank" rel="noopener">DigiCash</a> (a company founded in&nbsp;1989 which attempted to innovate digital currency),&nbsp;Wei Dai’s&nbsp;<a href="//en.bitcoin.it/wiki/B-money" target="_blank" rel="noopener">b-money</a>&nbsp;(a conceptual system published in&nbsp;1998 which Satoshi cites it in the Bitcoin white paper), and&nbsp;“<a href="//en.wikipedia.org/wiki/E-gold" target="_blank" rel="noopener">e-gold</a>” (a centralized digital currency that started in 1996) are all notable early mentions.
									</List.Description>
							</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										With that history noted, modern digital currency starts in 2008 when&nbsp;<a href="//en.wikipedia.org/wiki/Satoshi_Nakamoto" target="_blank" rel="noopener noreferrer">Satoshi Nakamoto</a> (an anonymous&nbsp;person and/or group) released their&nbsp;<a href="//bitcoin.org/en/bitcoin-paper" target="_blank" rel="noopener noreferrer">paper detailing what would become Bitcoin</a>.
									</List.Description>
							</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										Bitcoin became the first decentralized digital coin when it was created in 2008. It&nbsp;then went public in&nbsp;2009.
									</List.Description>
							</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										As of 2018, Bitcoin&nbsp;is the most commonly known and used cryptocurrency. Meanwhile, other coins including Ethereum (ETH), Ripple (XRP), and Litecoin (LTC) and more are notable mentions.
									</List.Description>
							</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										Given the&nbsp;popularity of Bitcoin as well as&nbsp;its history, the term “<a href="//cryptocurrencyfacts.com/what-is-altcoin/">altcoin</a>” is sometimes used to describe alternative cryptocurrencies&nbsp;to bitcoin (especially coins with small market caps).
									</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										As of January 2015, there were&nbsp;over <a href="//en.wikipedia.org/wiki/List_of_cryptocurrencies" target="_blank" rel="noopener noreferrer">500</a>&nbsp;different types of cryptocurrencies – or altcoins – for trade in online markets. However,&nbsp;only 10 of them had market capitalizations over $10 million.
									</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										As of September 2017, there were over 1,100 cryptocurrencies and the&nbsp;total market capitalization of all cryptocurrencies reached an all-time high surpassing <a href="//www.coindesk.com/cryptocurrency-market-cap-tops-60-billion-hit-time-high/" target="_blank" rel="noopener noreferrer">$60 billion</a>! Then, by December 2017, the total market cap reached $600 billion (a multiple of 10 in only two months).
									</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='toggle right' />
								<List.Content>
        							<List.Description>
										In other words, although the future is uncertain, cryptocurrency seems to be more than just a fad. Here in early 2018 cryptocurrency is shaping up to be a growing market that (despite its pros and cons) is likely here for the long haul.
									</List.Description>
								</List.Content>
							</List.Item>
						</List>
					</Segment>
				</div>
			</div>
		)
	}
}
