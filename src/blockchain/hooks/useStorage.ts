'use client';

import type { Abi } from 'viem';
import { wagmiConfig } from '../config';
import { storageABI } from '../abis/storage';
import { handleError } from '@/lib/utils/errors';
import { useReadContract, useWriteContract } from 'wagmi';
import type { Config, UseReadContractParameters, UseWriteContractParameters } from 'wagmi';

type UseStorageReadParameters = Omit<UseReadContractParameters, 'abi' | 'address' | 'functionName' | 'args'>;

export function useStorageRead<T = unknown>(
  functionName: string,
  args: Array<any> = [],
  options?: UseStorageReadParameters,
) {
  const storage = process.env.NEXT_PUBLIC_STORAGE_ADDRESS as `0x${string}`;

  return useReadContract<Abi, string, Array<any>, Config, T>({
    abi: storageABI as Abi,
    address: storage,
    functionName: functionName,
    args,
    query: {} as any,
    ...options,
  });
}

type useStorageWriteParameters = Pick<UseWriteContractParameters, 'mutation'>['mutation'];

export function useStorageWrite(functionName: string, options?: useStorageWriteParameters) {
  const storage = process.env.NEXT_PUBLIC_STORAGE_ADDRESS as `0x${string}`;

  const { writeContractAsync, writeContract, ...rest } = useWriteContract({
    config: wagmiConfig,
    mutation: {
      onError: (error) => {
        handleError(error);
        return false;
      },
      onSettled: (data) => {
        console.log(data);
      },
      ...options,
    },
  });

  const write = async (args: Array<any> = []) => {
    try {
      await writeContractAsync({
        abi: storageABI as Abi,
        address: storage,
        args,
        functionName,
      });
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  };

  return { write, ...rest };
}
