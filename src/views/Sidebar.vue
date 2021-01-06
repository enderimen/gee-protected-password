<template>
  <section class="m-sidebar">
      <div class="m-dashboard">
          <img src="./../assets/logo.png" alt="logo" height="58" class="-mr10">
          <p><strong>gee</strong>protected</p>
      </div>

      <nav class="m-navigation">
        <ul>
          <li>
            <IconLamb class="icon"/>
            <h4>Hemen Başla!</h4>
          </li>
          <li>
            <router-link tag="a" to="/passwords">
              <IconPassword class="icon"/>
              <span>Şifrelerim</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" to="/secure-notes" class="active">
              <IconNote class="icon"/>
              <span>Notlarım</span>
            </router-link>
          </li>
          <li>
            <router-link tag="a" to="/account">
              <IconPerson class="icon"/>
              <span>Hesabım</span>
            </router-link>
          </li>

          <li>
            <router-link tag="a" to="/settings">
              <IconSettings class="icon"/>
              <span>Ayarlar</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="m-dashboard">
          <label for="darkmode" class="m-darkmode">
              <input type="checkbox" id="darkmode">
              <div class="darkmode-switch-btn"></div>
              <span>Darkmode</span>
          </label>
          <router-link tag="a" to="/logout">
            <IconLogout class="icon"/>
              <span>logout</span>
          </router-link>
      </div>
  </section>
</template>

<script>
import IconNote from "@/icons/closed-eye.svg";
import IconLamb from "@/icons/lamb.svg";
import IconPassword from "@/icons/password.svg";
import IconPerson from "@/icons/person.svg";
import IconLogout from "@/icons/logout.svg";
import IconSettings from "@/icons/settings.svg";

export default {
  components: {
    IconNote,
    IconLamb,
    IconPassword,
    IconPerson,
    IconSettings,
    IconLogout,
  }
}
</script>

<style lang="scss" scoped>
.m-sidebar {
  width: 320px;
  min-width: 320px;
  background-color: var(--theme-bg-color);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.m-dashboard {
  height: 100px;
  padding-left: 35px;
  padding-right: 35px;
  background-color: var(--active-bg-color);
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: var(--font-family);

  & p {
    font-size: 18px;
    text-transform: uppercase;
    color: var(--soft-text-color);
    font-size: 18px;
    line-height: 27px;
    margin-right: auto;
    font-weight: 400;
  }

  & b {
    font-size: 18px;
    line-height: 27px;
  }

  & a {
    display: inline-flex;
    align-items: center;
    font-weight: 300;

    &:active, &:visited {
      text-decoration: none;
    }

    & span {
      color: var(--light-text-color);
    }
  }

  .m-darkmode {
    display: flex;
    align-items: center;
    color: var(--light-text-color);
    cursor: pointer;

    & span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
    }
  }

  .darkmode-switch-btn {
    height: 24px;
    width: 50px;
    padding: 2px;
    border-radius: 24px;
    background-color: var(--light-text-color);
    border: 2px solid var(--active-link-badge-color);
    margin-right: 5px;
    transition: all ease .3s;

    &::after {
      display: inline-flex;
      align-self: flex-end;
      content: " ";
      height: 24px;
      width: 24px;
      background-color: var(--active-bg-color);
      border-radius: 50%;
      transition: all ease .3s;
      cursor: pointer;
    }
  }

  #darkmode {
    display: none;

    &:checked {
      & + .darkmode-switch-btn {
        background-color: var(--theme-bg-color);

        &:after {
          margin-left: 26px;
          background-color: var(--light-text-color);
        }
      }
    }
  }
}

.m-navigation {
  padding-top: 20px;
  flex: 2;

  font-family: var(--font-family);

  & ul {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  & ul li {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 300;


    &:first-child {
      padding: 15px 35px;

      & h4 {
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
      }
    }

    &:last-child {
      margin-top: auto;
      border-top: 1px solid var(--soft-line-bg-color);
    }

    a {
      display: flex;
      align-items: center;
      color: var(--light-text-color);
      text-decoration: none;
      text-transform: capitalize;
      padding: 15px 35px;
      position: relative;
      width: 100%;
      transition: all 300ms;
      letter-spacing: 1px;

      &:active, &:visited {
        text-decoration: none;
      }

      &:hover {
        cursor: pointer;
        background-color: #1e2631;
      }

      &.router-link-exact-active {
        background-color: var(--button-bg-color);

        &:before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 52px;
          position: absolute;
          left: 0;
          top: 0;
          background-color: var(--active-link-badge-color);
        }
      }
    }
  }

  & li:first-child {
    display: flex;
    text-transform: capitalize;
    color: var(--light-text-color);
  }
}
</style>