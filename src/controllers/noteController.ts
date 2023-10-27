import { Request, Response } from 'express';
import { getConnectionPool } from '../db';
import { Note } from '../models/Note';

const pool = getConnectionPool();

export const createNote = async (req: Request, res: Response) => {
 
};

export const getAllNotes = async (req: Request, res: Response) => {
  
};

export const getNoteById = async (req: Request, res: Response) => {
  
};

export const updateNoteById = async (req: Request, res: Response) => {
  
};

export const deleteNoteById = async (req: Request, res: Response) => {
  
};
