import React from 'react'
import {shallow} from 'enzyme'
import {Root} from '../../src/containers/RootContainer'

describe('RootContainer', () => {
  describe('Root', () => {
    let props, component

    beforeEach(() => {
      props = {}
      component = shallow(<Root {...props}/>)
    })

    it('renders in progress when no value is available', () =>
      component.find('.loading').children().text().should.equal('in progress ...')
    )

    it('renders value when available', () => {
      const pi = Math.PI
      component.setProps({pi})
      component.find('.result').children().text().should.equal(`estimate is ${pi}`)
    })
  })
})
