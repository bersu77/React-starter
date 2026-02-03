import Header from '../components/header'
import Banner from '../components/banner'
import PageMarquee from '../components/page-marquee'
import About from '../components/about'
import Footer from '../components/footer'
import KeyFeature from '../components/key-feature'
import HowItWorks from '../components/how-it-works'
import Faq from '../components/faq'
import Beta from '../components/beta'

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <PageMarquee />
      <About />
      <KeyFeature />
      <HowItWorks />
      <Faq />
      <Beta />
      <Footer />
    </>
  )
}
