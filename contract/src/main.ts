import {
  loadTinyFrontendClient,
  loadTinyFrontendServer,
} from "@tiny-frontend/client";
import { TinyFrontendServerResponse } from "@tiny-frontend/client/dist/load.server";
import React from "react";

import type exportedModule from "../../app/lib/index";
import { tinyFrontendName, version } from "../package.json";

export type ElyraCanvasType = typeof exportedModule;

export const loadElyraCanvasServer = async (
  tinyApiEndpoint: string
): Promise<TinyFrontendServerResponse<ElyraCanvasType>> =>
  await loadTinyFrontendServer<ElyraCanvasType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });

export const loadElyraCanvasClient = async (
  tinyApiEndpoint: string
): Promise<ElyraCanvasType> =>
  await loadTinyFrontendClient<ElyraCanvasType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });
