import Header from '../components/header'
import Footer from '../components/footer'
import Web3Hero from '../components/web3/Web3Hero'
import CryptoCard from '../components/web3/CryptoCard'
import BettingNFT from '../components/web3/BettingNFT'
import Marketplace from '../components/web3/Marketplace'
import Web3Faq from '../components/web3/Web3Faq'
import Web3CTA from '../components/web3/Web3CTA'

export default function Web3Page() {
  return (
    <>
      <Header />
      <Web3Hero />
      <CryptoCard />
      <BettingNFT />
      <Marketplace />
      <Web3Faq />
      <Web3CTA />
      <Footer />
    </>
  )
}
