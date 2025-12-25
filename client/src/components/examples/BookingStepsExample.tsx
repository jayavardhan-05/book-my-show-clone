import BookingSteps from '../BookingSteps';

export default function BookingStepsExample() {
  return (
    <BookingSteps
      currentStep={1}
      steps={['Select Movie', 'Choose Seats', 'Payment', 'Confirmation']}
    />
  );
}
