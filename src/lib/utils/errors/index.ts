import toast from 'react-hot-toast';

export const handleError = (error: unknown) => {
  let errorMessage = '';
  if (error instanceof Error) {
    if (error.name === 'ContractFunctionExecutionError') {
      errorMessage = error.message.split('\n')[1];
      return errorMessage.length > 0 ? toast.error(errorMessage) : null;
    }
  } else if (typeof error === 'string') {
    // console.error(error);
    errorMessage = error.split('\n')[1];
    return errorMessage.length > 0 ? toast.error(errorMessage) : null;
  }

  console.log(error);
  toast.error('An error occurred. Please try again later.');
};
