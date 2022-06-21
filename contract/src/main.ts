import {
  loadTinyFrontendClient,
  loadTinyFrontendServer,
} from "@tiny-frontend/client";
import { TinyFrontendServerResponse } from "@tiny-frontend/client/dist/load.server";
import React from "react";

import type exportedModule from "../../app/lib/index";
import { tinyFrontendName, version } from "../package.json";

export type ElyraCanvasFinalType = typeof exportedModule;

export const loadElyraCanvasFinalServer = async (
  tinyApiEndpoint: string
): Promise<TinyFrontendServerResponse<ElyraCanvasFinalType>> =>
  await loadTinyFrontendServer<ElyraCanvasFinalType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });

export const loadElyraCanvasFinalClient = async (
  tinyApiEndpoint: string
): Promise<ElyraCanvasFinalType> =>
  await loadTinyFrontendClient<ElyraCanvasFinalType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });
