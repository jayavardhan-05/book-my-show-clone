import SeatSelector from '../SeatSelector';

export default function SeatSelectorExample() {
  return (
    <div className="max-w-xl mx-auto">
      <SeatSelector
        showtimeId="s1"
        onSeatsSelected={(seats) => console.log('Selected seats:', seats)}
      />
    </div>
  );
}
