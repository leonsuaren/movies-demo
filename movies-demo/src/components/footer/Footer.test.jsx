import { shallow } from 'enzyme';
import { Footer } from './Footer';

test('renders without error', () => {
  const wrapper = shallow(<Footer />);
  const footerComponent = wrapper.find("[data-test='footer-component']");
  expect(footerComponent.length).toBe(1);
});