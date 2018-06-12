import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'jest-emotion'
import * as emotion from 'emotion'
import 'jest-localstorage-mock'

expect.addSnapshotSerializer(createSerializer(emotion))

Enzyme.configure({
  adapter: new Adapter(),
})
