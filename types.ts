export interface Asset {
  id: string;
  symbol: string;
  name: string;
  chain_id: string;
  rpc: string;
  denom: string;
  decimals: number;
  logoURI: string;
  tags: string;
}

export interface IBCAsset extends Asset {
  channel: string;
  juno_channel: string;
  juno_denom: string;
  external_deposit_uri: string;
}

export interface CW20Asset extends Asset {
  token_address: string;
}
