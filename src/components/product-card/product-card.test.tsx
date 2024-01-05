import { render, screen } from '@testing-library/react';
import { ProviderWrapper, RoutesWrapper } from '../../utiils/jest';
import ProductCard from './product-card';
import { createFakeCamera } from '../../utiils/mock';

const fakeCamera = createFakeCamera();

describe('Component: ProductCard', () => {
  it('should render correctly', () => {
    render(
      <ProviderWrapper>
        <RoutesWrapper jsxElement={<ProductCard camera={fakeCamera}/>}/>
      </ProviderWrapper>
    );


    expect(screen.getByText('Всего оценок:')).toBeInTheDocument();
  });
});
