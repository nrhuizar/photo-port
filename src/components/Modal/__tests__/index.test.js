import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';
const currentPhoto = {
    name: 'Park bunch',
    category: 'landscape',
    description: 'lorem ipsom',
    index: 1
};
const { getByText } = render(<Modal
    onClose={mockToggleModal}
    currentPhoto={currentPhoto}
  />);
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        render(<Modal
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal}
            />)
    })
        // snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })  