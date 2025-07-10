import { useState, useCallback } from "react";

const BASE_URL = "https://dummyjson.com/";

const token = "jhkugiqlbbobfe96786r32bkjnflksnf8f92r93rbbw9fgh9f23ub";

const useFetch = (endpoint, isPublic = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiRequest = useCallback(
    async (method, payload, params) => {
      debugger;
      setError(null);
      setLoading(true);

      try {
        const headers = {};

        if (payload) {
          headers["content-type"] = "application/json";
        }

        if (!isPublic) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        let fullUrl = `${BASE_URL}${endpoint}`;

        if (params) {
          fullUrl = `${fullUrl}/?${params}`;
        }

        const response = await fetch(fullUrl, {
          method,
          headers,
          body: payload ? JSON.stringify(payload) : undefined,
        });

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [endpoint, isPublic, token]
  );

  const GET = useCallback(
    (params) => {
      apiRequest("GET", null, params);
    },
    [apiRequest]
  );

  const POST = useCallback(
    (payload, params) => {
      apiRequest("POST", payload, params);
    },
    [apiRequest]
  );

  const PUT = useCallback(
    (payload, params) => {
      apiRequest("PUT", payload, params);
    },
    [apiRequest]
  );

  const DELETE = useCallback(
    (params) => {
      apiRequest("DELETE", params);
    },
    [apiRequest]
  );

  return {
    GET,
    POST,
    PUT,
    DELETE,
    data,
    loading,
    error,
  };
};

export default useFetch;
