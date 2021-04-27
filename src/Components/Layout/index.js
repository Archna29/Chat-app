import React from 'react';
import './style.css';
const Layout=(props)=>{
    return(
        <div className="card"> 
        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PGc+PGc+PHBhdGggZD0ibTMxNSAwaC0zMDBjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2NDgyYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMzYwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTQyMnoiIGZpbGw9IiNiZWViZmEiLz48cGF0aCBkPSJtMTk1IDB2NTEyaDE4MGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1di00MjJsLTc1LTc1eiIgZmlsbD0iIzllZTJmOCIvPjwvZz48cGF0aCBkPSJtMzE1IDB2NjBjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg2MGMwLTQxLjM1NS0zMy42NDUtNzUtNzUtNzV6IiBmaWxsPSIjODdjMGVkIi8+PC9nPjwvZz48cGF0aCBkPSJtMjMzLjQ1NyA0NTFoLTc4LjQ1N2MtOC4yODQgMC0xNS02LjcxNi0xNS0xNXM2LjcxNi0xNSAxNS0xNWg3OC40NTdjOC4yODQgMCAxNSA2LjcxNiAxNSAxNXMtNi43MTYgMTUtMTUgMTV6IiBmaWxsPSIjNWY1NWFmIi8+PHBhdGggZD0ibTE5NSA0NTFoMzguNDU3YzguMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2LTE1LTE1LTE1aC0zOC40NTd6IiBmaWxsPSIjNDUzZDgzIi8+PGc+PGc+PGc+PGc+PGc+PGc+PHBhdGggZD0ibTIzNSAyNzFoLTE2MGMtOC4yODQgMC0xNS02LjcxNi0xNS0xNXYtOC43ODljMC01Mi4zMDIgNDEuNzYzLTk1LjcgOTQuMDYzLTk2LjIwNyA1Mi44MTEtLjUxMSA5NS45MzcgNDIuMzAxIDk1LjkzNyA5NC45OTZ2MTBjMCA4LjI4NC02LjcxNiAxNS0xNSAxNXoiIGZpbGw9IiM1ZjU1YWYiLz48cGF0aCBkPSJtMTU1IDE1MS4wMDd2MTE5Ljk5M2g4MGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1di0xMGMwLTUyLjM4My00Mi42MTctOTQuOTkyLTk1LTk0Ljk5M3oiIGZpbGw9IiM0NTNkODMiLz48cGF0aCBkPSJtMTU1IDE3NmMtMzEuNzA1IDAtNTcuNS0yNS43OTUtNTcuNS01Ny41czI1Ljc5NS01Ny41IDU3LjUtNTcuNSA1Ny41IDI1Ljc5NSA1Ny41IDU3LjUtMjUuNzk1IDU3LjUtNTcuNSA1Ny41eiIgZmlsbD0iI2ZmZTRjMiIvPjxwYXRoIGQ9Im0xNTUgNjF2MTE1YzMxLjcwNiAwIDU3LjUtMjUuNzk0IDU3LjUtNTcuNXMtMjUuNzk0LTU3LjUtNTcuNS01Ny41eiIgZmlsbD0iI2YyZDFhNSIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjxnPjxwYXRoIGQ9Im0xOTUgMzMxaC0xMjBjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTVoMTIwYzguMjg0IDAgMTUgNi43MTYgMTUgMTVzLTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzllZTJmOCIvPjwvZz48Zz48cGF0aCBkPSJtMTk1IDM5MWgtMTIwYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1aDEyMGM4LjI4NCAwIDE1IDYuNzE2IDE1IDE1cy02LjcxNiAxNS0xNSAxNXoiIGZpbGw9IiM5ZWUyZjgiLz48L2c+PHBhdGggZD0ibTMxNSAxNjFoLTQwYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1aDQwYzguMjg0IDAgMTUgNi43MTYgMTUgMTVzLTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzg3YzBlZCIvPjxwYXRoIGQ9Im0zMTUgMjIxaC00MGMtOC4yODQgMC0xNS02LjcxNi0xNS0xNXM2LjcxNi0xNSAxNS0xNWg0MGM4LjI4NCAwIDE1IDYuNzE2IDE1IDE1cy02LjcxNiAxNS0xNSAxNXoiIGZpbGw9IiM4N2MwZWQiLz48Zz48cGF0aCBkPSJtNDc1LjQ3IDI0MC45MjMtMzAuNjQyLTI1LjcxMmMtNi4zNDYtNS4zMjUtNy4xNzQtMTQuNzg2LTEuODQ5LTIxLjEzMnMxNC43ODYtNy4xNzQgMjEuMTMyLTEuODQ5bDMwLjY0MiAyNS43MTJjNi4zNDYgNS4zMjUgNy4xNzQgMTQuNzg2IDEuODQ5IDIxLjEzMi01LjMyNSA2LjM0Ny0xNC43ODYgNy4xNzQtMjEuMTMyIDEuODQ5eiIgZmlsbD0iIzQ1M2Q4MyIvPjxwYXRoIGQ9Im00NjguMDc0IDE1Ni4zOTRjLTYuMzQ2LTUuMzI1LTcuMTc0LTE0Ljc4Ni0xLjg0OS0yMS4xMzJsMTkuMjg0LTIyLjk4MWM1LjMyNS02LjM0NiAxNC43ODYtNy4xNzQgMjEuMTMyLTEuODQ5czcuMTc0IDE0Ljc4NiAxLjg0OSAyMS4xMzJsLTE5LjI4NCAyMi45ODFjLTUuMzI0IDYuMzQ2LTE0Ljc4NSA3LjE3NC0yMS4xMzIgMS44NDl6IiBmaWxsPSIjNWY1NWFmIi8+PHBhdGggZD0ibTUwNi42NDIgMTEwLjQzMS0zOC41NjcgNDUuOTYzYzYuMzQ2IDUuMzI1IDE1LjgwOCA0LjQ5NyAyMS4xMzItMS44NDlsMTkuMjg0LTIyLjk4MWM1LjMyNS02LjM0NiA0LjQ5Ny0xNS44MDgtMS44NDktMjEuMTMzeiIgZmlsbD0iIzQ1M2Q4MyIvPjxwYXRoIGQ9Im00NjUuOTYxIDIxMy4zNjNjNS4zMjUtNi4zNDYgNC40OTctMTUuODA3LTEuODQ5LTIxLjEzMmwtMzAuNjQyLTI1LjcxMmMtNi4zNDYtNS4zMjUtMTUuODA3LTQuNDk3LTIxLjEzMiAxLjg0OWwtMTAyLjg0NyAxMjIuNTY3Yy01LjMyNSA2LjM0Ni00LjQ5NyAxNS44MDcgMS44NDkgMjEuMTMybDMwLjY0MiAyNS43MTFjNi4zNDYgNS4zMjUgMTUuODA3IDQuNDk3IDIxLjEzMi0xLjg0OXoiIGZpbGw9IiM5OTlmZWQiLz48cGF0aCBkPSJtNDY0LjExMiAxOTIuMjMxLTE1LjMyMS0xMi44NTYtMTIyLjEzIDE0NS41NDggMTUuMzIxIDEyLjg1NmM2LjM0NiA1LjMyNSAxNS44MDcgNC40OTcgMjEuMTMyLTEuODQ5bDEwMi44NDYtMTIyLjU2N2M1LjMyNi02LjM0NiA0LjQ5OC0xNS44MDctMS44NDgtMjEuMTMyeiIgZmlsbD0iIzdjODRlOCIvPjxwYXRoIGQ9Im0zMDkuNDkxIDI5MC45MzUtMzguNTY3IDQ1Ljk2M2MtNS4zMjUgNi4zNDYtNC40OTcgMTUuODA3IDEuODQ5IDIxLjEzMmwzMC42NDIgMjUuNzExYzYuMzQ2IDUuMzI1IDE1LjgwOCA0LjQ5NyAyMS4xMzItMS44NDlsMzguNTY3LTQ1Ljk2M3oiIGZpbGw9IiNmZmY3OWYiLz48cGF0aCBkPSJtMzM2LjMwMyAzMTMuNDMzLTQ4LjIwOSA1Ny40NTMgMTUuMzIxIDEyLjg1NmM2LjM0NiA1LjMyNSAxNS44MDggNC40OTcgMjEuMTMyLTEuODQ5bDM4LjU2Ny00NS45NjN6IiBmaWxsPSIjZmZkZTU1Ii8+PHBhdGggZD0ibTIzNy43OTggNDE0LjMyNmMtMS45MjUtMjIuMDA0IDQuOTctNDMuODcyIDE5LjE2OC02MC43OTNsMTMuOTU4LTE2LjYzNSA1My42MjMgNDQuOTk1LTEzLjk1OCAxNi42MzVjLTE0LjE5OCAxNi45MjEtMzQuNTM2IDI3LjUwOC01Ni41NDEgMjkuNDMzLTguMjUzLjcyMi0xNS41MjgtNS4zODMtMTYuMjUtMTMuNjM1eiIgZmlsbD0iIzk5OWZlZCIvPjxwYXRoIGQ9Im0yOTcuNzM2IDM1OS4zOTYtNTQuNjM3IDY1LjExM2MyLjk0MSAyLjQ2OCA2LjgyMyAzLjgxMyAxMC45NDkgMy40NTIgMjIuMDA0LTEuOTI1IDQyLjM0My0xMi41MTMgNTYuNTQxLTI5LjQzM2wxMy45NTgtMTYuNjM1eiIgZmlsbD0iIzdjODRlOCIvPjxwYXRoIGQ9Im0yMzcuNTA5IDQwNy44MzUtMTUuNTQzIDE4LjUyM2MtNS4zMjUgNi4zNDYtNC40OTcgMTUuODA4IDEuODQ5IDIxLjEzM3MxNS44MDggNC40OTcgMjEuMTMyLTEuODQ5bDE1LjU0My0xOC41MjN6IiBmaWxsPSIjNWY1NWFmIi8+PHBhdGggZD0ibTI0OSA0MTcuNDc3LTI1LjE4NSAzMC4wMTRjNi4zNDYgNS4zMjUgMTUuODA4IDQuNDk3IDIxLjEzMi0xLjg0OWwxNS41NDMtMTguNTIzeiIgZmlsbD0iIzQ1M2Q4MyIvPjxwYXRoIGQ9Im00OTUuMDE5IDEzOS44
        NC0xNS4zMjEtMTIuODU2Yy0xMC41NzctOC44NzUtMjYuMzQ2LTcuNDk1LTM1LjIyMSAzLjA4MWwtMzIuMTM5IDM4
        LjMwMiA1My42MjMgNDQuOTk1IDMyLjEzOS0zOC4zMDJjOC44NzUtMTAuNTc2IDcuNDk1LTI2Lj
        M0NS0zLjA4MS0zNS4yMnoiIGZpbGw9IiM3Yzg0ZTgiLz48cGF0aCBkPSJtNDk4LjEgMTc1LjA2MWM4L
        jg3NS0xMC41NzcgNy40OTUtMjYuMzQ2LTMuMDgxLTM1LjIyMWwtNy42Ni02LjQyOC00OC4yMDkgNT
        cuNDUzIDI2LjgxMiAyMi40OTh6IiBmaWxsPSIjNWY2OWUzIi8+PC9nPjxnIGZpbGw9IiM4N2MwZWQiPjxwYXRoIGQ9Im0yMTA
        gMzE2YzAtOC4yODQtNi43MTYtMTUtMTUtMTV2MzBjOC4yODQgMCAxNS02LjcxNiAxNS0xNXoiLz48cGF0aCBkPSJtMTk1IDM2MXYzMGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02L
        jcxNi0xNS0xNS0xNXoiLz48L2c+PC9nPjwvc3ZnPg=="  id="img" alt="signup"/>
        <h4 className="text-center text-dark">Chattings</h4>
        <p>{props.text}</p>
        <form>
  <div class="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username"/>
  </div>
  <div class="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email"/>
  </div>
</form>
        </div>
    )
}
export default Layout;

