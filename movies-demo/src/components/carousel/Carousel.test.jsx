import { shallow } from 'enzyme';
import { Carousel } from './Carousel';

test('renders without errors', () => {
  const wrapper = shallow(<Carousel />);
  const carouselComponent = wrapper.find("[data-test='carousel-component']");
  expect(carouselComponent.length).toBe(1);
});