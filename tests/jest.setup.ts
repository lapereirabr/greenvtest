import supertest from "supertest";
import { server } from "../src/shared/server";
export const testServer = supertest(server);