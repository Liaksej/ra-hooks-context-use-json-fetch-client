import { useEffect, useReducer } from "react";

interface State {
  loading: boolean;
  error: any;
  data: any;
}

interface Actions {
  type: "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE";
  payload?: {
    data?: any;
    error?: string | null;
  };
}

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.payload?.data,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        error: action.payload?.error,
        data: null,
      };
    default:
      return state;
  }
}

export function useJsonFetch(url: string, opts?: {}) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    dispatch({ type: "FETCH_INIT" });
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: { data: data } });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: { error: error } });
      });
  }, [url]);

  return [state.data, state.loading, state.error];
}
