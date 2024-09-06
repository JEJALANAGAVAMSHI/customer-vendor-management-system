export interface AuthResponseDto {
    value: TokenDetails;
    statusCode: number;
  }
  
  export interface TokenDetails {
    token: string;
    expiration: string;
    roles: string[];
  }