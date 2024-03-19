// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package sdkerrors

import (
	"encoding/json"
	"fmt"
)

// SchemasErrUnauthorizedCode - A machine readable error code.
type SchemasErrUnauthorizedCode string

const (
	SchemasErrUnauthorizedCodeUnauthorized SchemasErrUnauthorizedCode = "UNAUTHORIZED"
)

func (e SchemasErrUnauthorizedCode) ToPointer() *SchemasErrUnauthorizedCode {
	return &e
}

func (e *SchemasErrUnauthorizedCode) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "UNAUTHORIZED":
		*e = SchemasErrUnauthorizedCode(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SchemasErrUnauthorizedCode: %v", v)
	}
}

type SchemasErrUnauthorizedError struct {
	// A machine readable error code.
	Code SchemasErrUnauthorizedCode `json:"code"`
	// A link to our documentation with more details about this error code
	Docs string `json:"docs"`
	// A human readable explanation of what went wrong
	Message string `json:"message"`
	// Please always include the requestId in your error report
	RequestID string `json:"requestId"`
}

func (o *SchemasErrUnauthorizedError) GetCode() SchemasErrUnauthorizedCode {
	if o == nil {
		return SchemasErrUnauthorizedCode("")
	}
	return o.Code
}

func (o *SchemasErrUnauthorizedError) GetDocs() string {
	if o == nil {
		return ""
	}
	return o.Docs
}

func (o *SchemasErrUnauthorizedError) GetMessage() string {
	if o == nil {
		return ""
	}
	return o.Message
}

func (o *SchemasErrUnauthorizedError) GetRequestID() string {
	if o == nil {
		return ""
	}
	return o.RequestID
}

// ErrUnauthorized - Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
type ErrUnauthorized struct {
	Error_ SchemasErrUnauthorizedError `json:"error"`
}

var _ error = &ErrUnauthorized{}

func (e *ErrUnauthorized) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
