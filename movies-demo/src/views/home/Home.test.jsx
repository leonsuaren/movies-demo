import { shallow } from 'enzyme';
import { Home } from './Home';

test('renders without errors', () => {
  const wrapper = shallow(<Home />);
  const homeComponent = wrapper.find("[data-test='home-component']");
  expect(homeComponent.length).toBe(1);
});