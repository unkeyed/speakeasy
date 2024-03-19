// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Op - The operation you want to perform on the remaining count
type Op string

const (
	OpIncrement Op = "increment"
	OpDecrement Op = "decrement"
	OpSet       Op = "set"
)

func (e Op) ToPointer() *Op {
	return &e
}

func (e *Op) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "increment":
		fallthrough
	case "decrement":
		fallthrough
	case "set":
		*e = Op(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Op: %v", v)
	}
}

type UpdateRemainingRequestBody struct {
	// The id of the key you want to modify
	KeyID string `json:"keyId"`
	// The operation you want to perform on the remaining count
	Op Op `json:"op"`
	// The value you want to set, add or subtract the remaining count by
	Value *int64 `json:"value"`
}

func (o *UpdateRemainingRequestBody) GetKeyID() string {
	if o == nil {
		return ""
	}
	return o.KeyID
}

func (o *UpdateRemainingRequestBody) GetOp() Op {
	if o == nil {
		return Op("")
	}
	return o.Op
}

func (o *UpdateRemainingRequestBody) GetValue() *int64 {
	if o == nil {
		return nil
	}
	return o.Value
}

// UpdateRemainingResponseBody - The configuration for an api
type UpdateRemainingResponseBody struct {
	// The number of remaining requests for this key after updating it. `null` means unlimited.
	Remaining *int64 `json:"remaining"`
}

func (o *UpdateRemainingResponseBody) GetRemaining() *int64 {
	if o == nil {
		return nil
	}
	return o.Remaining
}

type UpdateRemainingResponse struct {
	// HTTP response content type for this operation
	ContentType string
	// HTTP response status code for this operation
	StatusCode int
	// Raw HTTP response; suitable for custom response parsing
	RawResponse *http.Response
	// The configuration for an api
	Object *UpdateRemainingResponseBody
}

func (o *UpdateRemainingResponse) GetContentType() string {
	if o == nil {
		return ""
	}
	return o.ContentType
}

func (o *UpdateRemainingResponse) GetStatusCode() int {
	if o == nil {
		return 0
	}
	return o.StatusCode
}

func (o *UpdateRemainingResponse) GetRawResponse() *http.Response {
	if o == nil {
		return nil
	}
	return o.RawResponse
}

func (o *UpdateRemainingResponse) GetObject() *UpdateRemainingResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
