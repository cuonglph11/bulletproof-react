import { User } from '@/features/users';
import { BaseEntity } from '@/types';

export type Attachment = {
  fileName: string;
  fileUrl: string;
  fileType: string;
  preview: string;
  createdDate: string;
};
export type Ticket = {
  assignee: User;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE';
  workingDate: string;
  site: string;
  numberOfPV: number;
  note: string;
  attachments: Attachment[];
  ticketId: string;
} & BaseEntity;
