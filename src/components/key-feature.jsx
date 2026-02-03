import React from 'react'
import CommonTitle from './common-title'
import Slider from './slider'
import { Container } from './grid'

export default function KeyFeature() {
    return (
        <div className='common-padding key-feature'>
            <Container>
                <CommonTitle
                    sub_title={'Key Feature'}
                    title="Real time update for sports"
                    title_class='max-w-140'
                    des="a Sophiscated platform that reinvents the social sports experience"
                />
                <Slider />
            </Container>
        </div>
    )
}
