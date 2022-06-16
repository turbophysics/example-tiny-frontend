import {
  loadTinyFrontendClient,
  loadTinyFrontendServer,
} from "@tiny-frontend/client";
import { TinyFrontendServerResponse } from "@tiny-frontend/client/dist/load.server";
import React from "react";

import type exportedModule from "../../app/lib/index";
import { tinyFrontendName, version } from "../package.json";

export type ElyraTestType = typeof exportedModule;

export const loadElyraTestServer = async (
  tinyApiEndpoint: string
): Promise<TinyFrontendServerResponse<ElyraTestType>> =>
  await loadTinyFrontendServer<ElyraTestType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });

export const loadElyraTestClient = async (
  tinyApiEndpoint: string
): Promise<ElyraTestType> =>
  await loadTinyFrontendClient<ElyraTestType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });
