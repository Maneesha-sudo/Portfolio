function ErrorMessage({ message }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-red-600 text-lg font-semibold">{message}</p>
    </div>
  );
}

export default ErrorMessage;
