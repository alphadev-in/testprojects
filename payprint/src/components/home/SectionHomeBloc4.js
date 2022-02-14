import React, { Fragment } from 'react'
import FAQs from './sectionHomeBloc4/FAQs'

function SectionHomeBloc4() {

  const faqsData = [
    {
      title: 'Which matenrial types can you work with?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Quis ipsum suspendisse ultrices gravida.`,
    },
    {
      title: 'Which matenrial types can you work with?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Quis ipsum suspendisse ultrices gravida.`,
    },
    {
      title: 'Which matenrial types can you work with?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Quis ipsum suspendisse ultrices gravida.`,
    },
    {
      title: 'Which matenrial types can you work with?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Quis ipsum suspendisse ultrices gravida.`,
    },
  ]

  const faqs = faqsData.map((el, id) => 
    <FAQs
      key={id}
      title={el.title}
      content={el.content}
    />
  )

  return (
    <Fragment>
      <section className="container" id="SectionHomeBloc4">
        <div className="has-text-centered has-text-black">
          <div className="columns is-marginless is-justify-content-center">
            <div className="column is-12-mobile is-8">
              <h1 className="is-size-36px has-text-weight-semibold">
                Frequently Asked Questions
              </h1>
              <p className="is-size-6 has-text-weight-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="columns is-marginless is-justify-content-center has-text-left">
            <div className="column is-12-mobile is-10">
              { faqs }
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SectionHomeBloc4
