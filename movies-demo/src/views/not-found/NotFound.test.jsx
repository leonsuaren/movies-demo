import { shallow } from 'enzyme';
import { NotFound } from './NotFound';

test('renders without errors', () => {
  const wrapper = shallow(<NotFound />);
  const homeComponent = wrapper.find("[data-test='not-found-component']");
  expect(homeComponent.length).toBe(1);
});