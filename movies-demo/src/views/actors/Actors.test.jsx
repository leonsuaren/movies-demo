import { shallow } from 'enzyme';
import { Actors } from './Actors';

test('renders without error', () => {
  const wrapper = shallow(<Actors />);
  const actorsComponent = wrapper.find("[data-test='actors-component']");
  expect(actorsComponent.length).toBe(1);
});