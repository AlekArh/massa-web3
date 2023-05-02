import { ISlot } from './ISlot';
export interface IEndorsement {
    id: string;
    in_pool: boolean;
    in_blocks: string[];
    is_final: boolean;
    endorsement: {
        content: {
            sender_public_key: string;
            slot: ISlot;
            index: number;
            endorsed_block: string;
        };
        signature: string;
    };
}
